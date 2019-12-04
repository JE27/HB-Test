const app = new Vue({
  el:'#app',
  data:{
    errors:[],
    email:null,
    password:null
  },
  methods:{
    checkForm:function(e) {
      this.errors = [];
      if(!this.email) {
        this.errors.push("Email required.");
      } else if(!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");        
      }
      if(!this.password) {
        this.errors.push("Password required.");
      } else if(this.password < 8) {
        this.errors.push("Password must be 8 characters or longer.");        
      } 
      if(!this.errors.length) return true;
      e.preventDefault();
    },
    validEmail:function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
  }
})