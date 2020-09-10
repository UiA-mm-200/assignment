let svadatekst = [

"Et smørbrød er en brødskive med ulike typer pålegg. Den kan være påsmurt med smør eller margarin.",
"Smørbrød med pålegg er særlig vanlig i de nordiske landene, i Nederland, Latvia, Litauen og Estland, der de ofte spises til frokost, formiddagsmat eller andre måltider.",
"Pålegget kan variere fra lite til mye, billig til dyrt, med eller uten pynt og tillegg. I Norge kan det for eksempel være ost, leverpostei, saltpølse, servelat, skinke, egg, kaviar, roastbeef, røykelaks, reker, syltetøy, sjokoladepålegg eller bananskiver.",
"Danmarks smørrebrød, gjerne rugbrød med mye pålegg, regnes som landets nasjonalrett."
];
let antallAvsnitt = process.argv.length >=3 ? process.argv[2] : svadatekst.length;

for (let i = 0; i < antallAvsnitt; i++) 
{
    console.log(svadatekst[i]);

};