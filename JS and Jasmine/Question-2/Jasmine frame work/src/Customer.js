class customer{
    constructor(name,email,billdate,phone,billamount){
        this.name=name;
        this.email=email;
        this.billdate=billdate;
        this.phone=phone;
        this.billamount=billamount;
    }
}
class customerManage{
    constructor(){
        this.customers=[];
    }
    addCustomer(cus){
        if(cus==null)
            throw "Customer not created";
            this.customers.push(cus);
    }
    removeCustomer(name){
        for (let index = 0;index<this.customers.length; index++){
            const ele = this.customers[index];
            if(ele.name==name){
                this.customers.splice(index,1);
                return;
            }
        
        }
        throw "Employee not found to delete";
    }
    updateCustomer(cus){
        let selected = this.customers.find((e)=>e.name==name.name);
        if(selected==undefined)
            throw "Employee not found to update";
        selected.name=cus.name;
    }
}