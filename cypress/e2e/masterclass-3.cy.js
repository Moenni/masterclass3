///<reference types="cypress"/>
describe('Masterclass 3 Pushing it',()=>{
  it.skip('Deberia visitar la pagina',()=>{
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
   cy.contains(tarea2).siblings('button').click()
  })  
  it("Deberia probar la funcionalidad de todo list",()=>{
    var tarea1= "Tarea 1"
    var tarea2= "Tarea 2"
    var tarea3= "Tarea 3"
    var tarea4= "Tarea 4"
    var tarea5= "Tarea 5"
    var tarea6= "Tarea 6"
    cy.visit('https://pushing-front.vercel.app/')
    cy.get("#registertoggle").dblclick()
    cy.xpath("//input[@name='user']").type("pushingit")
    cy.xpath("//input[@name='pass']").type("123456!")
    cy.contains("Log in").click()
    cy.get(`[id*='pushing']`).should("exist")
    cy.get("#todolistlink").click()
    cy.xpath("//input[@cy-get='task']").type(`${tarea1}{enter}`)
    cy.xpath("//input[@cy-get='task']").type(`${tarea2}{enter}`)
    cy.xpath("//input[@cy-get='task']").type(`${tarea3}{enter}`)
    cy.xpath("//input[@cy-get='task']").type(`${tarea4}{enter}`)
    cy.xpath("//input[@cy-get='task']").type(`${tarea5}{enter}`)
    cy.xpath("//input[@cy-get='task']").type(`${tarea6}{enter}`)
    cy.contains(tarea1).click()
    cy.xpath(`//p[text()="${tarea2}"]`).click()
    cy.xpath(`//p[starts-with(text(),"${tarea3}")]`).click()
    cy.get("#completed").click()
    cy.xpath("//p").should("have.length","3")
    cy.get("#active").click()
    cy.xpath("//ul[@role='list']/li/div/p").should("have.length","3")

  })
})