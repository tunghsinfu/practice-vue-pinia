export interface FormTableField {
    type: 'text' | 'select';
    name: string;
    label: string;
    defaultValue?: string | null;
}

export interface FormTableTextField extends FormTableField {
    type: 'text';
}

export interface FormTableSelectField extends FormTableField {
    type: 'select';
    options: string[];
}

export interface FormTableRow {
    id?: string;
    class?: string;
    items: FormTableField[];
}

export function createFormTableRow(items: FormTableField[], id: string = '', rowClass: string = ''): FormTableRow {
    return {
        id,
        class: rowClass,
        items
    };
}

