window.onload = function (){

    document.getElementById('projetos').onclick = function()
    {
        document.getElementById('corpo-poslogin-menu').style.display = 'contents';
        document.getElementById('corpo-poslogin-titulo').style.marginBottom = '34px';
    }
    document.getElementById('ativosintelectuais').onclick = function()
    {
        document.getElementById('corpo-poslogin-menu').style.display = 'contents';
        document.getElementById('corpo-poslogin-titulo').style.marginBottom = '34px';
    }
    document.getElementById('paraprojetos').onclick = function()
    {
        document.getElementById('corpo-poslogin-menu').style.display = 'none';
        document.getElementById('projetos').style.display = 'contents';
        document.getElementById('novoprojeto').style.display = 'contents';
        document.getElementById('ativosintelectuais').style.display = 'none';
        document.getElementById('novoativo').style.display = 'none';
        document.getElementById('corpo-poslogin-titulo').style.marginBottom = '90px';
    }
    document.getElementById('paraativos').onclick = function()
    {
        document.getElementById('corpo-poslogin-menu').style.display = 'none';
        document.getElementById('ativosintelectuais').style.display = 'contents';
        document.getElementById('novoativo').style.display = 'contents';
        document.getElementById('projetos').style.display = 'none';
        document.getElementById('novoprojeto').style.display = 'none';
        document.getElementById('corpo-poslogin-titulo').style.marginBottom = '90px';
    }    
}