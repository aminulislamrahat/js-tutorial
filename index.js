function Student(name,age) {
    this.name = name ;
    this.age = age;
    this.display = function(){
        document.write("Name : "+this.name);
        document.write("</br>");
        document.write("Age : "+this.age);
        document.write("</br>");
    }

}

var student1 = new Student ("Rahat",26);
student1.display();
