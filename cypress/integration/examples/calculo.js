const MESES = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

const UF = [
  "29397",
  "29400",
  "29402",
  "29404",
  "29406",
  "29408",
  "29410",
  "29412",

];  


  //const fecha = new Date();
  var fecha= new Date();
  
  console.log(fecha);
  console.log(fecha.getDate());
  console.log(MESES[fecha.getMonth()]); 
  console.log(MESES[fecha.getMonth()], fecha.getDate());
 
  console.log(UF[fecha.getDate()-1]);
  var valoruf = UF[fecha.getDate()-1];

  console.log(valoruf);

  var ivaesperado = 0.80 *0.19;
  console.log(ivaesperado);

  var precioesperado = 0.80 + ivaesperado;
  console.log(precioesperado);

  

/* describe('Calculo UF', () => {

  beforeEach(function (){
    cy.fixture('valorUF').then((data) => {

      this.data= data
    })

  })

  it('has valorUF', function (){

    //cy.readFile('\fixtures\valorUF.json').its('día').should('eq', fecha.getDate())
    expect(this.data.día).to.equal(fecha.getDate())
  })
 
}) */
