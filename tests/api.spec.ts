import { test, expect, request } from "@playwright/test";

test('Get user via API', async({request}) => {

    //Make the API call
    const response = await request.get('https://jsonplaceholder.typicode.com/users/2');

    //Assert the status code
    expect(response.status()).toBe(200);

    //Parse the response body
    const body = await response.json();

    //Assert the data
    expect(body.email).toBe('Shanna@melissa.tv');

});

test('Add a user using Post API', async({request}) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'My Post',
            body: 'Some content',
            userId: 1
        }
    });

    expect(response.status()).toBe(201); //201 = Created

    const body = await response.json();

    expect(body.title).toBe('My Post');

    expect(body.id).toBeDefined();

});

test('Update the added user using Put API', async({request}) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1',{
        data:{
            title:'My Updated Post',
            body: 'Updated content',
            userId: 1
        }
    });

    expect(response.status()).toBe(200); //Updated

    const body = await response.json();

    expect(body.title).toBe('My Updated Post');

    expect(body.body).toBe('Updated content');
});

test('Delete the added user using delete API', async({request}) => {

    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1')

    expect(response.status()).toBe(200);
});

test('Mix API and UI', async({page, request}) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    const body = await response.json();

    const userName = body.username;

    await page.goto('https://jsonplaceholder.typicode.com/users/1');

    const nameLocator = page.locator('pre');

    await expect(nameLocator).toContainText(userName);
});