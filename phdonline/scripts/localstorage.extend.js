/*******************************************************************/
/*  This special prototype util is to extend localStorage to store */
/*  more complex datatype like object.                             */
/*  Usage : localStorage.setObject(param);                         */
/*  Usage : localStorage.getObject(param);                         */
/*******************************************************************/
Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
   if ( this.getItem(key) != undefined ){
   		return JSON.parse(this.getItem(key));
   } else {
   		return null;
   }
}