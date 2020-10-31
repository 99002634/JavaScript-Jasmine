describe('Suite  to test classses',()=> {
    let cus=null;
    beforeAll(()=>{
        console.log("this function is executed  before any of the operations begin");
    })

    beforeEach(()=>{
        cus=new customers("Harshavardhan C.A","harsha@gmail.com","28/10/2020",7996485977,50000);
        console.log("this function is executed before every test case");
    })

    afterEach(()=>{
        cus=null;
        console.log("this function is executed aftere every test case");
    })

    afterAll(()=>{
        console.log("this function is the last function to execute of the test function");
    })



    it('should set name',()=>{
        const cus = new customers("Harshavardhan C.A","harsha@gmail.com","28/10/2020",7996485977,50000)
        expect(cus.name).toBe("Harshavardhan C.A")
    })

    it('should set email',()=>{
        const cus = new customers("Harshavardhan C.A","harsha@gmail.com","28/10/2020",7996485977,50000)
        expect(cus.email).toBe("harsha@gmail.com")
    })

    it('should set billdate',()=>{
        const cus = new customers("Harshavardhan C.A","harsha@gmail.com","28/10/2020",7996485977,50000)
        expect(cus.billdate).toBe("28/10/2020")
    })

    it('should set phone',()=>{
        const cus = new customers("Harshavardhan C.A","harsha@gmail.com","28/10/2020",7996485977,50000)
        expect(cus.phone).toBe(7996485977)
    })

    it('should set billamount',()=>{
        const ecusmp = new customers("Harshavardhan C.A","harsha@gmail.com","28/10/2020",7996485977,50000)
        expect(cus.billamount).toBe(50000)
    })
})

describe('Testing for customermanage',()=>{
    let mgr=null;
    beforeAll(()=>{
        mgr=new customerManage();
        mgr.addcustomers(new customers("Harsha C.A","harshaca@gmail.com","30/10/2020",8899648597,5000));
    })
    const func = () => {
        mgr.addcustomers(null);
    };
 
    it("should not allow undefined values to be added", () => {
        let emp;
        expect(func).toThrow();
    })

});