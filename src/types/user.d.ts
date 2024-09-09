export type document = 'dni' | 'ruc';

export interface User {
    document: string;
    documentType: document
    number: string;
    name?: string;
    lastName?: string;
    birthday?: string;
  }