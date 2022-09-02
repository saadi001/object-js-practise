const student = {
    name: 'saadi',
    money: 200,
    study: 'IT & Management',
    subjects: ['web development','app development','management'],
    exam: function(){
        console.log(this.name,' is preparing for in an exam');
    },
    improve: function(subject){
        this.exam;
        return `${this.name} is taking improvement exam on ${subject}`;
    }
}
student.exam();

const reExam = student.improve('math');
console.log(reExam);