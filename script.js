$(function(){
    $('#btn').click(function(){
        var link = $('#URL_webHook_Input').val();
        var username = $('#username').val();
        var avatar = $('#avatar_URL_Input').val();
        var content = $('#content_Webhook_Input').val();
        if (link==null || link=="") {
            alert("Merci de mettre le lien de votre Webhook");
            return false;
        }
        $.post(link, {"content": content || "SUPPORT !\nhttps://discord.gg/9fZUXBgWDt", "username": username || "Webhook sender | By Nitro", "avatar_url": avatar || "https://cdn.discordapp.com/icons/800060636041314375/021296ec7a235c39113b93d2c253b852.png?size=1024",});
        localStorage.setItem("link", link);
        localStorage.setItem("username", username || "Free Sender By 𝗡𝗶𝘁𝗿𝗼");
        localStorage.setItem("avatar", avatar || "https://cdn.discordapp.com/icons/800060636041314375/021296ec7a235c39113b93d2c253b852.png?size=1024");
        alert("Message envoyer !");
    });
});
document.getElementById("URL_webHook_Input").value = localStorage.getItem("link");
document.getElementById("username").value = localStorage.getItem("username");
document.getElementById("avatar_URL_Input").value = localStorage.getItem("avatar");
$(function(){
    $('#btn2').click(function(){
        localStorage.removeItem("link");
        localStorage.removeItem("username");
        localStorage.removeItem("avatar");
    });
});