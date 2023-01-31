describe('API REST Test', () => {
    it('Makes a GET request to an API endpoint', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('title')
        })
    })
  
    it('Makes a POST request to an API endpoint', () => {
      const data = {
        title: 'Test title',
        body: 'Test body'
      }
  
      cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', data)
        .then((response) => {
          expect(response.status).to.eq(201)
          expect(response.body).to.have.property('title', data.title)
          expect(response.body).to.have.property('body', data.body)
        })
    })
  })
  