import EncryptedStorage from 'react-native-encrypted-storage';

export default class DataStorage{
    
    data;
    name;
    constructor(name){
        this.name = name;
    }


    async storeUserSession(data) {
        
            try {
                await EncryptedStorage.setItem(
                    this.name,
                    data
                    /*JSON.stringify({
                        age : 21,
                        token : "ACCESS_TOKEN",
                        username : "emeraldsanto",
                        languages : ["fr", "en", "de"]
                    })*/
                );
                console.log(" Data Saved")
                // Congrats! You've just stored your first value!
            } catch (error) {
                // There was an error on the native side
            }
        
    }

    async retrieveUserSession() {
        try {   
            const session = await EncryptedStorage.getItem(this.name);
        
            if (session !== undefined) {
                console.log("success")
                return session
                // Congrats! You've just retrieved your first value!
            }else
             return "undefined"
        } catch (error) {
            console.log(error)
            return "error"
            // There was an error on the native side
        }
    }


    async removeUserSession() {
        try {
            await EncryptedStorage.removeItem(this.name);
            // Congrats! You've just removed your first value!
        } catch (error) {
            // There was an error on the native side
        }
    }

    async  clearStorage() {
        try {
            await EncryptedStorage.clear();
            // Congrats! You've just cleared the device storage!
        } catch (error) {
            // There was an error on the native side
        }
    }
}