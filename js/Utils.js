var Utils = {
    mailtoAddress : function() {
        return "me"
    },
    mailtoDomain : function () {
        return "ggarciao.com"
    },
    mailto : function () {
    	location.href = 'mailto:' + this.mailtoAddress() + '@' + this.mailtoDomain();
    }
} 