
import path from 'path'
import fetch from 'node-fetch'
import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile);
const API_URL = `https://api.github.com/users/silverorange/repos`
const REPOS_FILE_PATH =path.join(__dirname,'../..','/data/repos.json') 

const getListOfReposFromGitHub = async () =>{

    try{
    // fetch the respos from github
    const response = await fetch(API_URL);
    const repos = await response.json();
    return repos;
    }
    catch(error){
        throw new Error("Unable to fetch Github Repos for silverorange")
    }

} 

const getListOfReposFromJSON = async () =>{
    try{
    // fetch the respos from file json
    const response = await readFile(REPOS_FILE_PATH)
    const repos  = JSON.parse(response.toString())
    return repos;

    }
    catch(error){
        throw new Error("Unable to fetch Github Repos for JSON File")
    }

} 

export default {
    getListOfReposFromGitHub,
    getListOfReposFromJSON
};