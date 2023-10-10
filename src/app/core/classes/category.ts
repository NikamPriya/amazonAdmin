export class Category {
    CategoryId: number;
    CategoryName: string;
    ParentCategoryId: number;

    constructor() {
        this.CategoryId = 0;
        this.CategoryName  ='';
        this.ParentCategoryId = 0; 
    }
}

export class ReturnClass { 
     
        message: string;
        result: boolean;
        data: any;
        constructor() {
            this.message = '';
            this.data = null;
            this.result = false;
        }     
}