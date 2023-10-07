inputs=document.querySelectorAll("[required]");
console.log(inputs);

inputs.forEach((campo)=>{
    campo.addEventListener("blur",()=>{verificaCampos(campo)});
});

function verificaCampos(campo){
if(campo.name=="cpf" && campo.value.lenght>=11)
    ehCpf(campo);

}

function ehCpf(campo){
const cpf=campo.value.replace(/\.|-/g,"");
console.log(cpf)
}

function ehRg(campo){
const rg=campo.value.replace(/\.|-/g,"");
console.log(rg)
}