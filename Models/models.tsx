export class Field{
    id: String;
    title: String;
    type: String;
    reference: String;    
    constructor(id: String, title: String, type: String, ref: String,){
            this.id = id
            this.title = title
            this.type = type
            this.reference = ref
    }

    
}

export class ShortTextField extends Field{
    text:String
    constructor(id: String, title: String, type: String, ref: String, text:String){
        super(id, title, type, ref)
        this.text = text;
    }
}

export class LongTextField extends Field{
    text:String
    constructor(id: String, title: String, type: String, ref: String, text:String){
        super(id, title, type, ref)
        this.text = text;
    }
}

export class EmailField extends Field{
    email:String
    constructor(id: String, title: String, type: String, ref: String, email:String){
        super(id, title, type, ref)
        this.email = email;
    }
}


export class PhoneNumberField extends Field{
    phone_number:String
    constructor(id: String, title: String, type: String, ref: String, phone_number:String){
        super(id, title, type, ref)
        this.phone_number = phone_number;
    }
}


export class DateField extends Field{
    date:String
    constructor(id: String, title: String, type: String, ref: String, date:String){
        super(id, title, type, ref)
        this.date = date;
    }
}

interface MultiChoiceOption{
    id:String,
    label:String
}

export class MultiChoiceField extends Field{
    choices:MultiChoiceOption[]
    selectedValues:String[]
    constructor(id: String, title: String, type: String, ref: String, choices:MultiChoiceOption[] = [], selectedValues:String[] = []){
        super(id, title, type, ref)
        this.choices = choices;
        this.selectedValues = selectedValues
    }
}

export class FileUploadField extends Field{
    file_url:String
    constructor(id: String, title: String, type: String, ref: String, file_url:String){
        super(id, title, type, ref)
        this.file_url = file_url;
    }
}

// phone_number, file_url, file_upload, choices, long_text, date, short_text