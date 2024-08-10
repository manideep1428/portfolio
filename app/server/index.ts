'use server'

const contacts = []


export default async function SaveMessages({contactform}:any){
    return contacts.push(contactform)
}