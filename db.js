// ----- Initial Data -----
let authors = [
    {
        id: '53a0724c-a416-4cac-ae45-bfaedce1f147',
        name: 'Erich Gamma'
    },
    {
        id: 'c2af9adc-d0b8-4d44-871f-cef66f86f7f6',
        name: 'Richard Helm'
    },
    {
        id: '2c931e7e-510f-49e5-aed6-d6b44087e5a1',
        name: 'Ralph Johnson'
    },
    {
        id: '404daf2a-9b97-4b99-b9af-614d07f818d7',
        name: 'John Vlissides'
    },
    {
        id: '6379c436-9fad-4b3f-a427-2d7241f5c1b1',
        name: 'Martin Fowler'
    },
    {
        id: 'f01bcdec-6783-464e-8f9e-8416830f7569',
        name: 'Eric Evans'
    },
    {
        id: 'a4824a31-5c83-42af-8c1b-6e2461aae1ef',
        name: 'Robert C. Martin'
    }
];

let publishers = [
    {
        id: 'b553085a-a7e0-4c9b-8a12-f971919c3683',
        name: 'Addison Wesley'
    },
    {
        id: '47bf3941-9c8b-42c0-9c72-7f3985492a5b',
        name: 'Prentice Hall'
    },
    {
        id: 'c01b1ff4-f894-4ef2-b27a-22aacc2fca70',
        name: 'Pearson Publishing'
    }
];

let books = [
    {
        id: '34115aac-0ff5-4859-8f43-10e8db23602b',
        name: 'Design Patterns - Elements of Reusable Object-Oriented Software',
        publisherId: 'b553085a-a7e0-4c9b-8a12-f971919c3683'
    },
    {
        id: 'd914aec0-25b2-4103-9ed8-225d39018d1d',
        name: 'Refactoring - Improving the Design of Existing Code',
        publisherId: 'b553085a-a7e0-4c9b-8a12-f971919c3683'
    },
    {
        id: 'b22da5d4-6a4b-4db5-8ec3-acc228c36260',
        name: 'Patterns of Enterprise Application Architecture',
        publisherId: 'b553085a-a7e0-4c9b-8a12-f971919c3683'
    },
    {
        id: '78851fe8-a657-410f-9b0a-2bc952636e16',
        name: 'Domain-Driven Design',
        publisherId: 'b553085a-a7e0-4c9b-8a12-f971919c3683'
    },
    {
        id: '463c0f40-86bc-4b8e-be47-e363111991d1',
        name: 'Clean Code - A Handbook of Agile Software Craftsmanship',
        publisherId: '47bf3941-9c8b-42c0-9c72-7f3985492a5b'
    },
    {
        id: 'ebd207cd-f909-4bb1-8416-3e17a161b859',
        name: 'Agile Software Development, Principles, Patterns, and Practices',
        publisherId: 'c01b1ff4-f894-4ef2-b27a-22aacc2fca70'
    }
];

let bookAuthors = [
    {
        id: '92450802-24ef-4907-9c70-b82697a96882',
        bookId: '34115aac-0ff5-4859-8f43-10e8db23602b',
        authorId: '53a0724c-a416-4cac-ae45-bfaedce1f147'
    },
    {
        id: 'f7ca2f8e-74ed-4323-9166-c8b606c2238e',
        bookId: '34115aac-0ff5-4859-8f43-10e8db23602b',
        authorId: 'c2af9adc-d0b8-4d44-871f-cef66f86f7f6'
    },
    {
        id: '908dbc7f-7782-43ae-9775-63bbd87db575',
        bookId: '34115aac-0ff5-4859-8f43-10e8db23602b',
        authorId: '2c931e7e-510f-49e5-aed6-d6b44087e5a1'
    },
    {
        id: '1852460f-b186-4a7a-a024-dccc0f72e052',
        bookId: '34115aac-0ff5-4859-8f43-10e8db23602b',
        authorId: '404daf2a-9b97-4b99-b9af-614d07f818d7'
    },
    {
        id: 'd075bdc8-df4b-4389-82ba-cb63726639ec',
        bookId: 'd914aec0-25b2-4103-9ed8-225d39018d1d',
        authorId: '6379c436-9fad-4b3f-a427-2d7241f5c1b1'
    },
    {
        id: '1b2b32ba-acbd-4578-9455-30eb4c8f5c40',
        bookId: 'b22da5d4-6a4b-4db5-8ec3-acc228c36260',
        authorId: '6379c436-9fad-4b3f-a427-2d7241f5c1b1'
    },
    {
        id: '4480710a-e2b6-4dab-a227-43cb3ffca7b8',
        bookId: '78851fe8-a657-410f-9b0a-2bc952636e16',
        authorId: 'f01bcdec-6783-464e-8f9e-8416830f7569'
    },
    {
        id: '57825f8c-6c13-4ddb-a90e-0c2be283972c',
        bookId: '463c0f40-86bc-4b8e-be47-e363111991d1',
        authorId: 'a4824a31-5c83-42af-8c1b-6e2461aae1ef'
    },
    {
        id: '5b83af5b-e9fa-47e5-8ac8-faa7d420f2d5',
        bookId: 'ebd207cd-f909-4bb1-8416-3e17a161b859',
        authorId: 'a4824a31-5c83-42af-8c1b-6e2461aae1ef'
    }
];

exports.db = {
	authors,
	publishers,
	books,
  bookAuthors
};