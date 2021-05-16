function User(name,dep)
{
    this.name=name;
    this.dep=dep;
}

var user1=new User("venkat","IT");
var user2=new User("selva","IT");
console.log(user1.name+" "+user2.name);
console.log(user1.dep+" "+user2.dep);