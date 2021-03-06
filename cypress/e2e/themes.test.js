describe("Smoke Test", () => {
  it("Site loads", () => {
    cy.visit(`/`).assertRoute(`/`)
    cy.viewport(1440, 900)
    cy.get("header").should("be.visible")
    cy.get("main").should("be.visible")
    cy.get("footer").should("be.visible")
  })
})

describe("Navigation Menu Test", () => {
  it("Navigation Works", () => {
    cy.viewport(1440, 900)
    cy.wait(500)
    cy.get("header").then(($header) => {
      if ($header.find("nav").length) {
        cy.get("nav").should("be.visible")
        cy.viewport(375, 812)
        cy.wait(500)
        cy.get("nav").should("not.be.visible")
        cy.get('button[aria-label*="Toggle Menu"]').should("be.visible").click()
        cy.get("nav").find("a").should("be.visible")
        cy.get('button[aria-label*="Toggle Menu"]').click()
      } else {
        return "No Nav"
      }
    })
  })
})

describe("Color Mode Toggle Test", () => {
  it("Toggle works", () => {
    cy.viewport(1440, 900)
    cy.scrollTo("top")
    cy.wait(1000)
    cy.get("header").then(($nav) => {
      if ($nav.find('button[aria-label*="Toggle dark mode"]').length) {
        cy.get('button[aria-label*="Toggle dark mode"]').click()
        cy.get("body").should("have.css", "background-color", "rgb(26, 32, 44)")
        cy.get('button[aria-label*="Toggle dark mode"]').click()
        cy.get("body").should(
          "have.css",
          "background-color",
          "rgb(247, 250, 252)"
        )
      } else {
        return "No color mode toggle"
      }
    })
  })
})
