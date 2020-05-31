import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDTYsbl_bH9lo-XVK4S_IBUNSh1QBzwcOY",
    authDomain: "miguens-budget-app.firebaseapp.com",
    databaseURL: "https://miguens-budget-app.firebaseio.com",
    projectId: "miguens-budget-app",
    storageBucket: "miguens-budget-app.appspot.com",
    messagingSenderId: "560020192346",
    appId: "1:560020192346:web:21999ee8383048a0d3ac63",
    measurementId: "G-69B0W60DSE"
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const database = firebase.database()

//events
//child removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

//child updated
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

//child added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// database.ref('expenses').once('value')
//     .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expenses').push({
//     description: 'House',
//     note: '',
//     amount: 1000,
//     createdAt: -1000
// })

// database.ref('notes/-M8bMka0ZcO7iFruWeKw').remove()

// database.ref('notes').push({
//     title: 'Second note',
//     body: 'this is my note'
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, e => {
//     console.log('Couldnt fecth data')
// })

// setTimeout(() => {
//     database.ref('job').update({
//         title: 'manager'
//     })
// }, 3500)

// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('job').update({
//         title: 'CEO'
//     })
// }, 10500)

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('error fetching error', e)
// })

// setTimeout(() => {
//     database.ref('age').set(66)
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500)

// database.ref('location').once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     }).catch(e => {
//         console.log('Error: ', e)
//     })

// database.ref().set({
//     name: 'Gustavo Miguens',
//     age: 32,
//     stressLevel: 6,
//     job: {
//         title: 'dev',
//         company: 'google'
//     },
//     location: {
//         city: 'CABA',
//         country: 'Argentina'
//     }
// }).then(() => {
//     console.log('Sync ok')
// }).catch((e) => {
//     console.log('Error:', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Barracas'
// }).then(() => {
//     console.log('Update completed')
// }).catch(e => {
//     console.log(e)
// })