/**
 * Created by MSI on 28.04.2017.
 */

const leshutic = require('@leshutic/laba11');



//leshutic.reposByName('accetone')
//leshutic.reposByStr('cwp')

var rep={
    "name": "cwp",
    "owner":{
        "login":"accetone"

    }
}

leshutic.commitsByRepo(rep);



