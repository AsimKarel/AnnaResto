import { FieldType } from "../constants/FieldTypeEnum";
import { DateField, EmailField, Field, FileUploadField, MultiChoiceField, PhoneNumberField, ShortTextField } from "../Models/models";

export const getFieldArrayFromJSON = (_data:any) => {
    let fields:Field[] = [];
    _data.form_response.definition.fields.map((obj:any) => {
        switch (obj.type){
            case FieldType.SHORT_TEXT:
            case FieldType.LONG_TEXT:
                const answer:String = _data.form_response.answers.find((ans:any) => ans.field.id === obj.id)?.text as String
                const shortTextField:ShortTextField = new ShortTextField(obj.id, obj.title, obj.type, obj.ref, answer)
                fields.push(shortTextField)
                break;
            case FieldType.EMAIL:
                const email:String = _data.form_response.answers.find((ans:any) => ans.field.id === obj.id)?.email as String
                const emailField:EmailField = new EmailField(obj.id, obj.title, obj.type, obj.ref, email)
                fields.push(emailField)
                break;
            case FieldType.CHOICE:
                const choices = _data.form_response.answers.find((ans:any) => ans.field.id === obj.id)?.choice?.label || _data.form_response.answers.find((ans:any) => ans.field.id === obj.id)?.choices?.labels
                let choiceField = null
                if(choices instanceof Array){
                    choiceField = new MultiChoiceField(obj.id, obj.title, obj.type, obj.ref, obj.choices, choices)
                }
                else{
                    choiceField = new MultiChoiceField(obj.id, obj.title, obj.type, obj.ref, obj.choices, [choices as String])
                }
                fields.push(choiceField)
                break;
            case FieldType.DATE:
                const date:String = _data.form_response.answers.find((ans:any) => ans.field.id === obj.id)?.date as String
                const dateField:DateField = new DateField(obj.id, obj.title, obj.type, obj.ref, date)
                fields.push(dateField)
                break;
            case FieldType.PHONE_NUMBER:
                const phone_number:String = _data.form_response.answers.find((ans:any) => ans.field.id === obj.id)?.phone_number as String
                const phone_numberField:PhoneNumberField = new PhoneNumberField(obj.id, obj.title, obj.type, obj.ref, phone_number)
                fields.push(phone_numberField)
                break;
            case FieldType.FILE:
                const file_upload:String = _data.form_response.answers.find((ans:any) => ans.field.id === obj.id)?.file_url as String
                const file_uploadField:FileUploadField = new FileUploadField(obj.id, obj.title, obj.type, obj.ref, file_upload)
                fields.push(file_uploadField)
                break;
        }
    })

    return interpolateReferenceValues(fields, _data.form_response.answers);
    
}

const interpolateReferenceValues = (fields:Field[], answers:any) => {
    return fields.map(f => {
        f.title = f.title.split(" ").map(s => {
            const i = s.search(/{{(.*)}}/);
            if(i != -1){
            //     console.log(s.substring(i+1, s.indexOf('}}')+1))
                const j = s.search(/:(.*)}}/);
                const key = s.substring(j+1, s.indexOf('}}'));
                const value = answers.find((ans:any)=> ans.field.ref == key);
                switch(value?.type){
                    case FieldType.EMAIL:
                        return value.email
                    case FieldType.SHORT_TEXT:
                        return value.text
                    case FieldType.LONG_TEXT:
                        return value.text
                }
                return value?.text
            }
            return s
          }).join(" ")
        return f;
    })
}