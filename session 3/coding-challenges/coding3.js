const mark = {
     fullname : 'mark miller',
     mass:78,
     height : 1.69,
     calcbmi:function () {
      this.bmi = this.mass / this.height **2;
      return this.bmi  ;

     }
};
const john = {
     fullname : 'john smith',
     mass:92,
     height : 1.95,
     calcbmi:function () {
      this.bmi = this.mass / this.height **2;
      return this.bmi  ;

     }
};


mark.calcbmi();
john.calcbmi();


console.log(mark.bmi , john.bmi);


if (mark.bmi > john.bmi) {
   console.log  (`${mark.fullname}  bmi (${mark.bmi}) is highr than ${john.fullname}  bmi (${john.bmi})`);
} else if(john.bmi > mark.bmi){
     console.log  (`${john.fullname}  bmi ${john.bmi} is highr than ${mark.fullname}  bmi ${mark.bmi}`);
}