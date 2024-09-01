const users = (function () {
   const users = {
      Daniel: {
         name: "Daniel Hernández Ochoa",
         img: "my/512.png",
         social: [{
            nameSocial: "Llamar",
            url: "tel:+5356556178",
         }, {
            nameSocial: "Whatsapp",
            url: "https://wa.me/qr/AJUC52WXO7XJG1",
            privated: true,
         }, {
            nameSocial: "Facebook",
            url: "https://www.facebook.com/daniel.hernandezochoa.750",
         }, {
            nameSocial: "Instagram",
            url: "https://www.instagram.com/danhez_neez/",
         }, {
            nameSocial: "Telegram",
            url: "https://t.me/danhez",
            privated: true,
         }]
      }
   };

   return users;

})();

export default users;