import React from 'react'
import DateFieldView from '../components/fields/DateFieldView';
import EmailFieldView from '../components/fields/EmailFieldView';
import FileUploadFieldView from '../components/fields/FileUploadFieldView';
import MultiChoiceFieldView from '../components/fields/MultiChoiceFieldView';
import PhoneNumberFieldView from '../components/fields/PhoneNumberFieldView';
import TextFieldView from '../components/fields/TextFieldView';
import { FieldType } from '../constants/FieldTypeEnum';
import { Field, ShortTextField, EmailField, MultiChoiceField, LongTextField, DateField, PhoneNumberField, FileUploadField } from '../Models/models';


export const getRenderItem = (item:Field) => {
    switch (item.type){
        case FieldType.LONG_TEXT:
            return <TextFieldView {...item as LongTextField}/>  
        case FieldType.SHORT_TEXT:
            return <TextFieldView {...item as ShortTextField}/>  
        case FieldType.EMAIL:  
            return <EmailFieldView {...item as EmailField}/>  
        case FieldType.CHOICE:  
            return <MultiChoiceFieldView {...item as MultiChoiceField}/> 
        case FieldType.DATE:  
            return <DateFieldView {...item as DateField}/> 
        case FieldType.PHONE_NUMBER:  
            return <PhoneNumberFieldView {...item as PhoneNumberField}/> 
        case FieldType.FILE:  
            return <FileUploadFieldView {...item as FileUploadField}/> 
    }
}