var names = new Array();

names[0] = "Jerry";
names[1] = "Hayato";
names[2] = "Sunny";
names[3] = "james";
names[4] = "Asish";
names[5] = "Steve";
names[6] = "Jhonny";
names[7] = "Jaime";
names[8] = "Shino";
names[9] = "Arunava";
names[10] = "Jacob";
names[11] = "Erwin";
names[12] = "jimmy";
names[13] = "Erik";
names[14] = "Jonathan";
names[15] = "Nancy";

for (let i = 0; i < names.length; i++)
{
    let x = names[i];
    if ((x[0] == 'J') || (x[0] == 'j'))
        console.log("Goodbye " + x);
    else
        console.log("Hello " + x);
}