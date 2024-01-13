///<reference types="cypress"/>
describe('Masterclass 3 Pushing it',()=>{
  it('Deberia visitar la pagina',()=>{
    var numeroRandom= Math.floor(Math.random()*1000)
    var user= "pushing" +numeroRandom
    var tarea1 = "Tarea 1"
    var tarea2 = "Tarea 2"
    cy.visit('https://pushing-front.vercel.app/')
    cy.get('#user').type(user );
    cy.get('#pass').type("123456!");
   cy.get("[value='Female']").check({force:true});
   cy.get("select#day").select("20");
   cy.get("[name='month']").select("August");
   cy.get("#year").select("2019");
   cy.xpath("//button[@id='submitForm']").click();
   cy.xpath(`//h2[contains(@id,'${user}')]`);
   cy.get(`[id^='user_${user}_']`).should("exist");
   cy.get(`[id*='${user}']`).should("exist");
   cy.xpath('//a[starts-with(@id,"todolist")]').click()
   cy.xpath("//input[@cy-get='task']").type(tarea1)
   cy.xpath("//input[@cy-get='task']/following-sibling::button").click()
   cy.xpath("//input[@cy-get='task']").type(tarea2)
   cy.xpath("//input[@cy-get='task']/following-sibling::button").click()
   cy.xpath(`//p[text()='${tarea1}']/following-sibling::button`).click()
   cy.xpath(`//p[text()='${tarea2}']`).click()
  })  
})