"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[243],{9243:(qe,w,u)=>{u.r(w),u.d(w,{RootUserModule:()=>f});var c=u(6895),s=u(8477),n=u(433),e=u(8256),p=u(8396);function A(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"Name is required."),e.qZA())}function T(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"Name should be 3 character."),e.qZA())}function U(i,o){if(1&i&&(e.TgZ(0,"div",24),e.YNc(1,A,2,0,"div",1),e.YNc(2,T,2,0,"div",1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.name.errors&&t.f.name.errors.required),e.xp6(1),e.Q6J("ngIf",t.f.name.errors&&t.f.name.errors.minlength)}}function C(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"password is required. "),e.qZA())}function q(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"password should be 5 characters."),e.qZA())}function I(i,o){if(1&i&&(e.TgZ(0,"div",24),e.YNc(1,C,2,0,"div",1),e.YNc(2,q,2,0,"div",1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.password1.errors&&t.f.password1.errors.required),e.xp6(1),e.Q6J("ngIf",t.f.password1.errors&&t.f.password1.errors.minlength)}}function y(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"password is required."),e.qZA())}function N(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"password should be 5 character."),e.qZA())}function E(i,o){if(1&i&&(e.TgZ(0,"div",24),e.YNc(1,y,2,0,"div",1),e.YNc(2,N,2,0,"div",1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.password2.errors&&t.f.password2.errors.required),e.xp6(1),e.Q6J("ngIf",t.f.password2.errors&&t.f.password2.errors.minlength)}}function J(i,o){1&i&&(e.TgZ(0,"div",24),e._uU(1," Re-Entered Password Miss-Match."),e.qZA())}function Y(i,o){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,J,2,0,"div",14),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.addAdmin.value.password1!=t.addAdmin.value.password2)}}function k(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"h2"),e._uU(6,"Add Admin "),e.qZA()(),e.TgZ(7,"div",7)(8,"div",8)(9,"button",9),e._uU(10,"Close"),e.qZA()()()(),e.TgZ(11,"form",10),e.NdJ("ngSubmit",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.submit())}),e.TgZ(12,"div",11)(13,"label",12),e._uU(14,"Enter your Name"),e.qZA(),e._UZ(15,"input",13),e.YNc(16,U,3,2,"div",14),e._UZ(17,"br"),e.TgZ(18,"label",15),e._uU(19,"Your Email"),e.qZA(),e.TgZ(20,"div",16),e._UZ(21,"input",17),e.qZA(),e._UZ(22,"br"),e.TgZ(23,"label",18),e._uU(24,"Enter your Password"),e.qZA(),e._UZ(25,"input",19),e.YNc(26,I,3,2,"div",14),e._UZ(27,"br"),e.TgZ(28,"label",20),e._uU(29,"Re-Enter Your Password"),e.qZA(),e._UZ(30,"input",21),e.YNc(31,E,3,2,"div",14),e.YNc(32,Y,2,1,"div",1),e._UZ(33,"br"),e.qZA(),e.TgZ(34,"div",22)(35,"button",23),e._uU(36,"Submit"),e.qZA()()()()()()}if(2&i){const t=e.oxw();e.xp6(11),e.Q6J("formGroup",t.addAdmin),e.xp6(5),e.Q6J("ngIf",t.f.name.touched&&t.f.name.invalid),e.xp6(10),e.Q6J("ngIf",t.f.password1.touched&&t.f.password1.invalid),e.xp6(5),e.Q6J("ngIf",t.f.password2.touched&&t.f.password2.invalid),e.xp6(1),e.Q6J("ngIf",t.f.password1.valid&&t.f.password2.valid),e.xp6(3),e.Q6J("disabled",t.addAdmin.invalid||t.addAdmin.value.password1!==t.addAdmin.value.password2)}}function P(i,o){1&i&&(e.TgZ(0,"div")(1,"div",25)(2,"div",26),e._UZ(3,"div",27),e.TgZ(4,"h6"),e._uU(5,"Please Wait While Loading..."),e.qZA()()()())}class g{constructor(o,t){this.api=o,this.router=t,this.addAdmin=new n.cw({name:new n.NI("",[n.kI.required,n.kI.minLength(3)]),email:new n.NI("",[n.kI.required,n.kI.email,n.kI.minLength(5)]),password1:new n.NI("",[n.kI.required,n.kI.minLength(5)]),password2:new n.NI("",[n.kI.required,n.kI.minLength(5)])})}ngOnInit(){}get f(){return this.addAdmin.controls}submit(){this.loaderShow=!0,this.addAdmin.value.password1!=this.addAdmin.value.password2?(console.log("pass not match"),this.loaderShow=!1,alert("Re-Entered Password Miss-Match")):this.api.addadmin(this.addAdmin.value).subscribe({next:o=>{this.data=o,this.loaderShow=!1,alert(this.data.status),this.router.navigate(["/rootuserhome"])},error:o=>{this.loaderShow=!1,alert(`Error...  ${o.error}`),this.addAdmin.reset()}})}}function S(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"Name is required."),e.qZA())}function M(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"Name should be 3 character."),e.qZA())}function Q(i,o){if(1&i&&(e.TgZ(0,"div",24),e.YNc(1,S,2,0,"div",1),e.YNc(2,M,2,0,"div",1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.name.errors&&t.f.name.errors.required),e.xp6(1),e.Q6J("ngIf",t.f.name.errors&&t.f.name.errors.minlength)}}function L(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"password is required. "),e.qZA())}function O(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"password should be 5 characters."),e.qZA())}function R(i,o){if(1&i&&(e.TgZ(0,"div",24),e.YNc(1,L,2,0,"div",1),e.YNc(2,O,2,0,"div",1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.password1.errors&&t.f.password1.errors.required),e.xp6(1),e.Q6J("ngIf",t.f.password1.errors&&t.f.password1.errors.minlength)}}function F(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"password is required."),e.qZA())}function H(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"password should be 5 character."),e.qZA())}function j(i,o){if(1&i&&(e.TgZ(0,"div",24),e.YNc(1,F,2,0,"div",1),e.YNc(2,H,2,0,"div",1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.password2.errors&&t.f.password2.errors.required),e.xp6(1),e.Q6J("ngIf",t.f.password2.errors&&t.f.password2.errors.minlength)}}function $(i,o){1&i&&(e.TgZ(0,"div",24),e._uU(1," Re-Entered Password Miss-Match."),e.qZA())}function W(i,o){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,$,2,0,"div",14),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.editAdmin.value.password1!=t.editAdmin.value.password2)}}function G(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"h2"),e._uU(6,"Edit Admin Registration"),e.qZA()(),e.TgZ(7,"div",7)(8,"div",8)(9,"button",9),e._uU(10,"Close"),e.qZA()()()(),e.TgZ(11,"form",10),e.NdJ("ngSubmit",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.submit())}),e.TgZ(12,"div",11)(13,"label",12),e._uU(14,"Enter your Name"),e.qZA(),e._UZ(15,"input",13),e.YNc(16,Q,3,2,"div",14),e._UZ(17,"br"),e.TgZ(18,"label",15),e._uU(19,"Your Email"),e.qZA(),e.TgZ(20,"div",16),e._UZ(21,"input",17),e.qZA(),e._UZ(22,"br"),e.TgZ(23,"label",18),e._uU(24,"Enter your Password"),e.qZA(),e._UZ(25,"input",19),e.YNc(26,R,3,2,"div",14),e._UZ(27,"br"),e.TgZ(28,"label",20),e._uU(29,"Re-Enter Your Password"),e.qZA(),e._UZ(30,"input",21),e.YNc(31,j,3,2,"div",14),e.YNc(32,W,2,1,"div",1),e._UZ(33,"br"),e.qZA(),e.TgZ(34,"div",22)(35,"button",23),e._uU(36,"Submit"),e.qZA()()()()()()}if(2&i){const t=e.oxw();e.xp6(11),e.Q6J("formGroup",t.editAdmin),e.xp6(5),e.Q6J("ngIf",t.f.name.touched&&t.f.name.invalid),e.xp6(5),e.Q6J("disabled",t.disableEmail)("value",t.email),e.xp6(5),e.Q6J("ngIf",t.f.password1.touched&&t.f.password1.invalid),e.xp6(5),e.Q6J("ngIf",t.f.password2.touched&&t.f.password2.invalid),e.xp6(1),e.Q6J("ngIf",t.f.password1.valid&&t.f.password2.valid),e.xp6(3),e.Q6J("disabled",t.editAdmin.invalid||t.editAdmin.value.password1!==t.editAdmin.value.password2)}}function D(i,o){1&i&&(e.TgZ(0,"div")(1,"div",25)(2,"div",26),e._UZ(3,"div",27),e.TgZ(4,"h6"),e._uU(5,"Please Wait While Loading..."),e.qZA()()()())}g.\u0275fac=function(o){return new(o||g)(e.Y36(p.$),e.Y36(s.F0))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-add-admin"]],decls:2,vars:2,consts:[["class","d-flex justify-content-center m-2  my-5 ",4,"ngIf"],[4,"ngIf"],[1,"d-flex","justify-content-center","m-2","my-5"],[1,"rounded","MyBorder","p-4"],[1,"col-12"],[1,"d-flex"],[1,"p-2","w-100"],[1,"p-2","flex-shrink-1"],["title","Close"],["routerLink","/rootuserhome",1,"btn-danger","my-2","btn","btn-sm"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","placeholder","Enter your Name","formControlName","name",1,"form-control"],["class","alert alert-danger mt-2",4,"ngIf"],["for","exampleInputEmail2"],["title","Once Registered You Cannot Edit Your Email"],["type","email","id","exampleInputEmail2","aria-describedby","emailHelp","placeholder","Enter your Email","formControlName","email",1,"form-control"],["for","exampleInputPassword1"],["type","password","id","exampleInputPassword1","formControlName","password1","placeholder","Enter your Password1",1,"form-control"],["for","exampleInputPassword2"],["type","password","id","exampleInputPassword2","formControlName","password2","placeholder","Enter your Password2",1,"form-control"],[1,"d-flex","justify-content-between"],["type","submit",1,"btn","rounded","my-2","btn-warning",3,"disabled"],[1,"alert","alert-danger","mt-2"],[1,"loading"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(o,t){1&o&&(e.YNc(0,k,37,6,"div",0),e.YNc(1,P,6,0,"div",1)),2&o&&(e.Q6J("ngIf",t.api.isLoggedin),e.xp6(1),e.Q6J("ngIf",t.loaderShow))},dependencies:[c.O5,s.rH,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]});class v{constructor(o,t,r){this.api=o,this.route=t,this.router=r,this.disableEmail=!0,this.editAdmin=new n.cw({name:new n.NI("",[n.kI.required,n.kI.minLength(3)]),password1:new n.NI("",[n.kI.required,n.kI.minLength(5)]),password2:new n.NI("",[n.kI.required,n.kI.minLength(5)])})}ngOnInit(){this._id=this.route.snapshot.params._id,this.getdata()}getdata(){this.loaderShow=!0,this.api.getbyidadmin(this._id).subscribe(o=>{this.user=o,this.email=this.user.email,this.editAdmin.setValue({name:this.user.name,password1:"",password2:""}),this.loaderShow=!1})}get f(){return this.editAdmin.controls}submit(){this.loaderShow=!0,this.editAdmin.value.password1!=this.editAdmin.value.password2?(console.log("pass not match"),this.loaderShow=!1,alert("Re-Entered Password Miss-Match")):this.api.updateadmin(this.editAdmin.value,this._id).subscribe({next:o=>{this.data=o,this.loaderShow=!1,alert(this.data.status),this.router.navigate(["/rootuserhome"])},error:o=>{this.loaderShow=!1,alert(`Error...  ${o.error}`),this.editAdmin.reset()}})}}function K(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"Name is required."),e.qZA())}function B(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"Name should be 3 character."),e.qZA())}function z(i,o){if(1&i&&(e.TgZ(0,"div",24),e.YNc(1,K,2,0,"div",1),e.YNc(2,B,2,0,"div",1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.name.errors&&t.f.name.errors.required),e.xp6(1),e.Q6J("ngIf",t.f.name.errors&&t.f.name.errors.minlength)}}function X(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"password is required. "),e.qZA())}function V(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"password should be 5 characters."),e.qZA())}function ee(i,o){if(1&i&&(e.TgZ(0,"div",24),e.YNc(1,X,2,0,"div",1),e.YNc(2,V,2,0,"div",1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.password1.errors&&t.f.password1.errors.required),e.xp6(1),e.Q6J("ngIf",t.f.password1.errors&&t.f.password1.errors.minlength)}}function te(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"password is required."),e.qZA())}function ie(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"password should be 5 character."),e.qZA())}function oe(i,o){if(1&i&&(e.TgZ(0,"div",24),e.YNc(1,te,2,0,"div",1),e.YNc(2,ie,2,0,"div",1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.password2.errors&&t.f.password2.errors.required),e.xp6(1),e.Q6J("ngIf",t.f.password2.errors&&t.f.password2.errors.minlength)}}function ne(i,o){1&i&&(e.TgZ(0,"div",24),e._uU(1," Re-Entered Password Miss-Match."),e.qZA())}function re(i,o){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,ne,2,0,"div",14),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.editUser.value.password1!=t.editUser.value.password2)}}function se(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"h2"),e._uU(6,"Edit User Registration"),e.qZA()(),e.TgZ(7,"div",7)(8,"div",8)(9,"button",9),e._uU(10,"Close"),e.qZA()()()(),e.TgZ(11,"form",10),e.NdJ("ngSubmit",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.submit())}),e.TgZ(12,"div",11)(13,"label",12),e._uU(14,"Enter your Name"),e.qZA(),e._UZ(15,"input",13),e.YNc(16,z,3,2,"div",14),e._UZ(17,"br"),e.TgZ(18,"label",15),e._uU(19,"Your Email"),e.qZA(),e.TgZ(20,"div",16),e._UZ(21,"input",17),e.qZA(),e._UZ(22,"br"),e.TgZ(23,"label",18),e._uU(24,"Enter your Password"),e.qZA(),e._UZ(25,"input",19),e.YNc(26,ee,3,2,"div",14),e._UZ(27,"br"),e.TgZ(28,"label",20),e._uU(29,"Re-Enter Your Password"),e.qZA(),e._UZ(30,"input",21),e.YNc(31,oe,3,2,"div",14),e.YNc(32,re,2,1,"div",1),e._UZ(33,"br"),e.qZA(),e.TgZ(34,"div",22)(35,"button",23),e._uU(36,"Submit"),e.qZA()()()()()()}if(2&i){const t=e.oxw();e.xp6(11),e.Q6J("formGroup",t.editUser),e.xp6(5),e.Q6J("ngIf",t.f.name.touched&&t.f.name.invalid),e.xp6(5),e.Q6J("disabled",t.disableEmail)("value",t.email),e.xp6(5),e.Q6J("ngIf",t.f.password1.touched&&t.f.password1.invalid),e.xp6(5),e.Q6J("ngIf",t.f.password2.touched&&t.f.password2.invalid),e.xp6(1),e.Q6J("ngIf",t.f.password1.valid&&t.f.password2.valid),e.xp6(3),e.Q6J("disabled",t.editUser.invalid||t.editUser.value.password1!==t.editUser.value.password2)}}function de(i,o){1&i&&(e.TgZ(0,"div")(1,"div",25)(2,"div",26),e._UZ(3,"div",27),e.TgZ(4,"h6"),e._uU(5,"Please Wait While Loading..."),e.qZA()()()())}v.\u0275fac=function(o){return new(o||v)(e.Y36(p.$),e.Y36(s.gz),e.Y36(s.F0))},v.\u0275cmp=e.Xpm({type:v,selectors:[["app-edit-admin"]],decls:2,vars:2,consts:[["class","d-flex justify-content-center m-2  my-5 ",4,"ngIf"],[4,"ngIf"],[1,"d-flex","justify-content-center","m-2","my-5"],[1,"rounded","MyBorder","p-4"],[1,"col-12"],[1,"d-flex"],[1,"p-2","w-100"],[1,"p-2","flex-shrink-1"],["title","Close"],["routerLink","/rootuserhome",1,"btn-danger","my-2","btn","btn-sm"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","placeholder","Enter your Name","formControlName","name",1,"form-control"],["class","alert alert-danger mt-2",4,"ngIf"],["for","exampleInputEmail2"],["title","Once Registered You Cannot Edit Your Email"],["type","email","id","exampleInputEmail2","aria-describedby","emailHelp","placeholder","Enter your Email",1,"form-control",3,"disabled","value"],["for","exampleInputPassword1"],["type","password","id","exampleInputPassword1","formControlName","password1","placeholder","Enter your Password1",1,"form-control"],["for","exampleInputPassword2"],["type","password","id","exampleInputPassword2","formControlName","password2","placeholder","Enter your Password2",1,"form-control"],[1,"d-flex","justify-content-between"],["type","submit",1,"btn","rounded","my-2","btn-warning",3,"disabled"],[1,"alert","alert-danger","mt-2"],[1,"loading"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(o,t){1&o&&(e.YNc(0,G,37,8,"div",0),e.YNc(1,D,6,0,"div",1)),2&o&&(e.Q6J("ngIf",t.api.isLoggedin),e.xp6(1),e.Q6J("ngIf",t.loaderShow))},dependencies:[c.O5,s.rH,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]});class h{constructor(o,t,r){this.api=o,this.route=t,this.router=r,this.disableEmail=!0,this.editUser=new n.cw({name:new n.NI("",[n.kI.required,n.kI.minLength(3)]),password1:new n.NI("",[n.kI.required,n.kI.minLength(5)]),password2:new n.NI("",[n.kI.required,n.kI.minLength(5)])})}ngOnInit(){this._id=this.route.snapshot.params._id,this.getdata()}getdata(){this.loaderShow=!0,this.api.getbyiduser(this._id).subscribe(o=>{this.user=o,this.email=this.user.email,this.editUser.setValue({name:this.user.name,password1:"",password2:""}),this.loaderShow=!1})}get f(){return this.editUser.controls}submit(){this.loaderShow=!0,this.editUser.value.password1!=this.editUser.value.password2?(console.log("pass not match"),this.loaderShow=!1,alert("Re-Entered Password Miss-Match")):this.api.updateuser(this.editUser.value,this._id).subscribe({next:o=>{this.data=o,this.loaderShow=!1,alert(this.data.status),this.router.navigate(["/rootuserhome/manage_users"])},error:o=>{this.loaderShow=!1,alert(`Error...  ${o.error}`),this.editUser.reset()}})}}function ae(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"th",6),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"button",7),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.deletes(a._id))}),e._uU(13,"Delete"),e.qZA(),e.TgZ(14,"button",8),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.edit(a._id))}),e._uU(15,"Edit"),e.qZA()()()}if(2&i){const t=o.$implicit,r=o.index;e.xp6(2),e.Oqu(r+1),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(t.date),e.xp6(2),e.Oqu(t._id)}}function le(i,o){if(1&i&&(e.TgZ(0,"table",2)(1,"thead")(2,"tr",3)(3,"th",4),e._uU(4,"#"),e.qZA(),e.TgZ(5,"th",4),e._uU(6,"Name"),e.qZA(),e.TgZ(7,"th",4),e._uU(8,"Email"),e.qZA(),e.TgZ(9,"th",4),e._uU(10,"Date of Join"),e.qZA(),e.TgZ(11,"th",4),e._uU(12,"Admin_ID"),e.qZA(),e.TgZ(13,"th",4),e._uU(14,"Function"),e.qZA()()(),e.TgZ(15,"tbody"),e.YNc(16,ae,16,5,"tr",5),e.qZA()()),2&i){const t=e.oxw();e.xp6(16),e.Q6J("ngForOf",t.viewAdmins)}}function ce(i,o){1&i&&(e.TgZ(0,"div")(1,"div",9)(2,"div",10),e._UZ(3,"div",11),e.TgZ(4,"h6"),e._uU(5,"Please Wait While Loading..."),e.qZA()()()())}h.\u0275fac=function(o){return new(o||h)(e.Y36(p.$),e.Y36(s.gz),e.Y36(s.F0))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-edit-user"]],decls:2,vars:2,consts:[["class","d-flex justify-content-center m-2  my-5 ",4,"ngIf"],[4,"ngIf"],[1,"d-flex","justify-content-center","m-2","my-5"],[1,"rounded","MyBorder","p-4"],[1,"col-12"],[1,"d-flex"],[1,"p-2","w-100"],[1,"p-2","flex-shrink-1"],["title","Close"],["routerLink","/rootuserhome/manage_users",1,"btn-danger","my-2","btn","btn-sm"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","placeholder","Enter your Name","formControlName","name",1,"form-control"],["class","alert alert-danger mt-2",4,"ngIf"],["for","exampleInputEmail2"],["title","Once Registered You Cannot Edit Your Email"],["type","email","id","exampleInputEmail2","aria-describedby","emailHelp","placeholder","Enter your Email",1,"form-control",3,"disabled","value"],["for","exampleInputPassword1"],["type","password","id","exampleInputPassword1","formControlName","password1","placeholder","Enter your Password1",1,"form-control"],["for","exampleInputPassword2"],["type","password","id","exampleInputPassword2","formControlName","password2","placeholder","Enter your Password2",1,"form-control"],[1,"d-flex","justify-content-between"],["type","submit",1,"btn","rounded","my-2","btn-warning",3,"disabled"],[1,"alert","alert-danger","mt-2"],[1,"loading"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(o,t){1&o&&(e.YNc(0,se,37,8,"div",0),e.YNc(1,de,6,0,"div",1)),2&o&&(e.Q6J("ngIf",t.api.isLoggedin),e.xp6(1),e.Q6J("ngIf",t.loaderShow))},dependencies:[c.O5,s.rH,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]});class m{constructor(o,t,r){this.api=o,this.route=t,this.router=r}ngOnInit(){this.getdata()}getdata(){this.loaderShow=!0,this.api.getalladmins().subscribe(o=>{this.viewAdmins=o,this.loaderShow=!1})}edit(o){this.loaderShow=!0,this.router.navigate([`/rootuserhome/edit-admin/${o}`]),this.loaderShow=!1}deletes(o){this.loaderShow=!0,this.api.deleteadmin(o).subscribe({next:t=>{this.loaderShow=!1,alert("Admin Deleted Successfully"),this.getdata()},error:t=>{this.loaderShow=!1,alert(t.error)}})}readmore(o){this.router.navigate([`/rootuserhome/read-admin-category-posts/${o}`])}}function ue(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"th",6),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"button",7),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.deletes(a._id))}),e._uU(13,"Delete"),e.qZA(),e.TgZ(14,"button",8),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.edit(a._id))}),e._uU(15,"Edit"),e.qZA(),e.TgZ(16,"button",9),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.approve(a._id))}),e._uU(17,"Approve As Admin"),e.qZA(),e.TgZ(18,"button",10),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.readmore(a._id))}),e._uU(19,"Read User Posts "),e.qZA()()()}if(2&i){const t=o.$implicit,r=o.index;e.xp6(2),e.Oqu(r+1),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(t.date),e.xp6(2),e.Oqu(t._id)}}function pe(i,o){if(1&i&&(e.TgZ(0,"table",2)(1,"thead")(2,"tr",3)(3,"th",4),e._uU(4,"#"),e.qZA(),e.TgZ(5,"th",4),e._uU(6,"Name"),e.qZA(),e.TgZ(7,"th",4),e._uU(8,"Email"),e.qZA(),e.TgZ(9,"th",4),e._uU(10,"Date of Join"),e.qZA(),e.TgZ(11,"th",4),e._uU(12,"User_ID"),e.qZA(),e.TgZ(13,"th",4),e._uU(14,"Functions"),e.qZA()()(),e.TgZ(15,"tbody"),e.YNc(16,ue,20,5,"tr",5),e.qZA()()),2&i){const t=e.oxw();e.xp6(16),e.Q6J("ngForOf",t.viewusers)}}function me(i,o){1&i&&(e.TgZ(0,"div")(1,"div",11)(2,"div",12),e._UZ(3,"div",13),e.TgZ(4,"h6"),e._uU(5,"Please Wait While Loading..."),e.qZA()()()())}m.\u0275fac=function(o){return new(o||m)(e.Y36(p.$),e.Y36(s.gz),e.Y36(s.F0))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-manage-admins"]],decls:2,vars:2,consts:[["class","table table-success table-striped text-center",4,"ngIf"],[4,"ngIf"],[1,"table","table-success","table-striped","text-center"],[1,"text-danger"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],["type","button",1,"btn","w-50","m-1","btn-sm","btn-danger",3,"click"],["type","button",1,"btn","w-50","m-1","btn-success","btn-sm",3,"click"],[1,"loading"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(o,t){1&o&&(e.YNc(0,le,17,1,"table",0),e.YNc(1,ce,6,0,"div",1)),2&o&&(e.Q6J("ngIf",t.api.isLoggedin()),e.xp6(1),e.Q6J("ngIf",t.loaderShow))},dependencies:[c.sg,c.O5]});class x{constructor(o,t,r){this.api=o,this.route=t,this.router=r}ngOnInit(){this.getdata()}getdata(){this.loaderShow=!0,this.api.getallUsers().subscribe(o=>{this.viewusers=o,this.loaderShow=!1})}edit(o){this.loaderShow=!0,this.router.navigate([`/rootuserhome/edit_user/${o}`]),this.loaderShow=!1}deletes(o){this.loaderShow=!0,this.api.deleteuser(o).subscribe({next:t=>{this.loaderShow=!1,alert("User Deleted Successfully"),this.getdata()},error:t=>{this.loaderShow=!1,alert(t.error)}})}readmore(o){this.router.navigate([`/rootuserhome/read-user-posts/${o}`])}approve(o){this.loaderShow=!0,this.api.approveAsAdmin(o).subscribe({next:t=>{this.loaderShow=!1,alert("Approve Success.Use Same credential For Admin")},error:t=>{this.loaderShow=!1,alert(`Error...  ${t.error}`)}})}}function _e(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",7)(2,"div",8)(3,"div")(4,"h2"),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA(),e.TgZ(10,"p"),e._uU(11),e.qZA()(),e.TgZ(12,"div")(13,"div",9)(14,"button",10),e._uU(15,"Close"),e.qZA()()()(),e._UZ(16,"hr"),e.TgZ(17,"p",11),e._uU(18),e.qZA()(),e.TgZ(19,"div",8)(20,"button",12),e.NdJ("click",function(){e.CHM(t);const d=e.oxw(2);return e.KtG(d.previous())}),e._uU(21,"PreviousPost"),e.qZA(),e.TgZ(22,"button",13),e.NdJ("click",function(){e.CHM(t);const d=e.oxw(2);return e.KtG(d.next())}),e._uU(23,"NextPost"),e.qZA()()()}if(2&i){const t=e.oxw(2);e.xp6(5),e.Oqu(t.posts[t.i].title),e.xp6(2),e.hij("(By : ",t.posts[t.i].user_name,")"),e.xp6(2),e.hij("Category: ",t.posts[t.i].category,""),e.xp6(2),e.hij("Date: ",t.posts[t.i].date,""),e.xp6(7),e.Oqu(t.posts[t.i].content)}}function fe(i,o){1&i&&(e.TgZ(0,"div",14)(1,"div",15)(2,"div",16)(3,"h2")(4,"i"),e._uU(5,"( There Is No Post In This Category )"),e.qZA()(),e.TgZ(6,"small")(7,"i"),e._uU(8,"( Please Select Another Category )"),e.qZA()()(),e.TgZ(9,"div",17)(10,"div",9)(11,"button",10),e._uU(12,"Close"),e.qZA()()()()())}function ge(i,o){if(1&i&&(e.TgZ(0,"div",2)(1,"div",3),e.YNc(2,_e,24,5,"div",4),e.YNc(3,fe,13,0,"div",5),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("ngIf",!t.notFound),e.xp6(1),e.Q6J("ngIf",t.notFound)}}function ve(i,o){1&i&&(e.TgZ(0,"div")(1,"div",18)(2,"div",19),e._UZ(3,"div",20),e.TgZ(4,"h6"),e._uU(5,"Please Wait While Loading..."),e.qZA()()()())}x.\u0275fac=function(o){return new(o||x)(e.Y36(p.$),e.Y36(s.gz),e.Y36(s.F0))},x.\u0275cmp=e.Xpm({type:x,selectors:[["app-manage-users"]],decls:2,vars:2,consts:[["class","table table-success table-striped text-center",4,"ngIf"],[4,"ngIf"],[1,"table","table-success","table-striped","text-center"],[1,"text-danger"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],["type","button",1,"btn","m-1","btn-sm","btn-danger",3,"click"],["type","button",1,"btn","m-1","btn-warning","btn-sm",3,"click"],["type","button",1,"btn","m-1","btn-info","btn-sm",3,"click"],["type","button",1,"btn","m-1","btn-sm","btn-success",3,"click"],[1,"loading"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(o,t){1&o&&(e.YNc(0,pe,17,1,"table",0),e.YNc(1,me,6,0,"div",1)),2&o&&(e.Q6J("ngIf",t.api.isLoggedin()),e.xp6(1),e.Q6J("ngIf",t.loaderShow))},dependencies:[c.sg,c.O5]});class Z{constructor(o,t){this.api=o,this.route=t,this.posts=[{title:"",content:"",user_id:"",user_name:"",category:""}],this.i=0,this.postLength=0,this.notFound=!1}ngOnInit(){this._id=this.route.snapshot.params._id,this.getdata()}getdata(){this.loaderShow=!0,this.i=0,this.api.searchpostbyuserId(this._id).subscribe({next:o=>{this.posts=o,this.postLength=this.posts.length-1,this.loaderShow=!1},error:o=>{this.notFound=!0,this.loaderShow=!1}})}previous(){this.loaderShow=!0,0!=this.i?this.i--:alert("You Reached First Post"),this.loaderShow=!1}next(){this.loaderShow=!0,this.postLength>this.i?this.i++:alert("You Reached Last Post"),this.loaderShow=!1}}function he(i,o){1&i&&(e.TgZ(0,"button",19),e._uU(1,"Wecome To RootUser Pannel"),e.qZA())}function xe(i,o){if(1&i&&(e.TgZ(0,"button",20),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij("RootUser Name: ",t.username," ")}}Z.\u0275fac=function(o){return new(o||Z)(e.Y36(p.$),e.Y36(s.gz))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["app-read-user-posts"]],decls:2,vars:2,consts:[["class","d-flex justify-content-center",4,"ngIf"],[4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"p-3","rounded","MyBorder","my-4","m-2"],["class"," rounded  p-3 ",4,"ngIf"],["class","text-center  p-3",4,"ngIf"],[1,"rounded","p-3"],[1,"col-12"],[1,"d-flex","justify-content-between"],["title","Close"],["routerLink","/rootuserhome/manage_users",1,"btn-danger","my-2","btn","btn-sm"],[1,"justify"],["title","Click Here For Previous Post",1,"btn","btn-warning","btn-sm",3,"click"],["title","Click Here For Next Post",1,"btn-warning","btn","btn-sm",3,"click"],[1,"text-center","p-3"],[1,"d-flex"],[1,"p-2","w-100"],[1,"p-2","flex-shrink-1"],[1,"loading"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(o,t){1&o&&(e.YNc(0,ge,4,2,"div",0),e.YNc(1,ve,6,0,"div",1)),2&o&&(e.Q6J("ngIf",t.api.isLoggedin()),e.xp6(1),e.Q6J("ngIf",t.loaderShow))},dependencies:[c.O5,s.rH]});const Ze=function(){return{exact:!0}};function be(i,o){1&i&&(e.TgZ(0,"a",21),e._uU(1,"Manage Admins "),e.qZA()),2&i&&e.Q6J("routerLinkActiveOptions",e.DdM(1,Ze))}function we(i,o){1&i&&(e.TgZ(0,"a",22),e._uU(1,"Manage Users"),e.qZA())}function Ae(i,o){1&i&&(e.TgZ(0,"a",23),e._uU(1,"Add Admin"),e.qZA())}function Te(i,o){1&i&&(e.TgZ(0,"div")(1,"div",24)(2,"div",25),e._UZ(3,"div",26),e.TgZ(4,"h6"),e._uU(5,"Please Wait While Loading..."),e.qZA()()()())}class b{constructor(o,t){this.router=o,this.api=t}ngOnInit(){this.username=this.api.getRootUserName()}logout(){this.loaderShow=!0,localStorage.clear(),this.router.navigate([""]),this.loaderShow=!1}}b.\u0275fac=function(o){return new(o||b)(e.Y36(s.F0),e.Y36(p.$))},b.\u0275cmp=e.Xpm({type:b,selectors:[["app-root-user-home"]],decls:24,vars:6,consts:[[1,"navbar","bgnav"],[1,"container-fluid"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#offcanvasNavbar","aria-controls","offcanvasNavbar",1,"navbar-toggler","bg-light"],[1,"navbar-toggler-icon"],[1,"d-flex","justify-content-end"],["class"," adminWelcome","type","button",4,"ngIf"],["class","user ","type","button",4,"ngIf"],["type","button",1,"logout",3,"click"],["tabindex","-1","id","offcanvasNavbar","aria-labelledby","offcanvasNavbarLabel",1,"offcanvas","offcanvas-start"],[1,"offcanvas-header"],["id","offcanvasNavbarLabel",1,"offcanvas-title"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close","btn-close-white"],[1,"offcanvas-body"],[1,"navbar-nav","justify-content-end","flex-grow-1","pe-3"],[1,"nav-item"],["class","nav-link nav-bg","routerLink","/rootuserhome/manage_admins","routerLinkActive","canvas-actived",3,"routerLinkActiveOptions",4,"ngIf"],["class","nav-link nav-bg","routerLink","/rootuserhome/manage_users","routerLinkActive","canvas-actived",4,"ngIf"],["class","nav-link nav-bg","routerLink","/rootuserhome/add-admin","routerLinkActive","canvas-actived",4,"ngIf"],[4,"ngIf"],["type","button",1,"adminWelcome"],["type","button",1,"user"],["routerLink","/rootuserhome/manage_admins","routerLinkActive","canvas-actived",1,"nav-link","nav-bg",3,"routerLinkActiveOptions"],["routerLink","/rootuserhome/manage_users","routerLinkActive","canvas-actived",1,"nav-link","nav-bg"],["routerLink","/rootuserhome/add-admin","routerLinkActive","canvas-actived",1,"nav-link","nav-bg"],[1,"loading"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(o,t){1&o&&(e.TgZ(0,"nav",0)(1,"div",1)(2,"button",2),e._UZ(3,"span",3),e.qZA(),e.TgZ(4,"div",4),e.YNc(5,he,2,0,"button",5),e.YNc(6,xe,2,1,"button",6),e.TgZ(7,"button",7),e.NdJ("click",function(){return t.logout()}),e._uU(8,"Log out"),e.qZA()(),e.TgZ(9,"div",8)(10,"div",9)(11,"h5",10),e._uU(12," Dashboard"),e.qZA(),e._UZ(13,"button",11),e.qZA(),e.TgZ(14,"div",12)(15,"ul",13)(16,"li",14),e.YNc(17,be,2,2,"a",15),e.qZA(),e.TgZ(18,"li",14),e.YNc(19,we,2,0,"a",16),e.qZA(),e.TgZ(20,"li",14),e.YNc(21,Ae,2,0,"a",17),e.qZA()()()()()(),e._UZ(22,"router-outlet"),e.YNc(23,Te,6,0,"div",18)),2&o&&(e.xp6(5),e.Q6J("ngIf",t.api.isLoggedin()),e.xp6(1),e.Q6J("ngIf",t.api.isLoggedin()),e.xp6(11),e.Q6J("ngIf",t.api.isLoggedin()),e.xp6(2),e.Q6J("ngIf",t.api.isLoggedin()),e.xp6(2),e.Q6J("ngIf",t.api.isLoggedin()),e.xp6(2),e.Q6J("ngIf",t.loaderShow))},dependencies:[c.O5,s.lC,s.rH,s.Od],styles:[".bgnav[_ngcontent-%COMP%]{background:linear-gradient(120deg,rgb(13,59,135),#7e3500)}@media screen and (max-width: 650px){.adminWelcome[_ngcontent-%COMP%]{display:none}}@media screen and (max-width: 450px){.offcanvas[_ngcontent-%COMP%]{width:150px!important}}.offcanvas[_ngcontent-%COMP%]{background:linear-gradient(120deg,rgb(13,59,135),#7e3500);width:210px}.nav-link[_ngcontent-%COMP%]{color:#fff}.adminWelcome[_ngcontent-%COMP%], .user[_ngcontent-%COMP%]{background-color:#4f360e;border-radius:10px;color:#fff;padding:7px;border:1px solid rgb(255,255,255)!important;margin:5px;border:none;cursor:default}.logout[_ngcontent-%COMP%]{background-color:#9b7f00;color:#fff;border-radius:10px;padding:7px;margin:5px;border:none}.logout[_ngcontent-%COMP%]:hover{background-color:#c39f00;color:#fff;cursor:pointer}.nav-bg[_ngcontent-%COMP%]{border:1px solid rgb(255,255,255);border-radius:10px;background-color:#4f360e;margin:5px;padding:5px 5px 5px 14px}.nav-bg[_ngcontent-%COMP%]:hover{background-color:#c39f00;color:#fff}.offcanvas-title[_ngcontent-%COMP%]{color:#fff}.canvas-actived[_ngcontent-%COMP%]{background-color:#9b7f00}"]});const Ue=[{path:"",component:b,children:[{path:"",component:m},{path:"manage_admins",component:m},{path:"manage_users",component:x},{path:"edit_user/:_id",component:h},{path:"edit-admin/:_id",component:v},{path:"add-admin",component:g},{path:"read-user-posts/:_id",component:Z}]}];class _{}_.\u0275fac=function(o){return new(o||_)},_.\u0275mod=e.oAB({type:_}),_.\u0275inj=e.cJS({imports:[s.Bz.forChild(Ue),s.Bz]});var Ce=u(529);class f{}f.\u0275fac=function(o){return new(o||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({imports:[c.ez,_,n.u5,n.UX,s.Bz,Ce.JF]})}}]);