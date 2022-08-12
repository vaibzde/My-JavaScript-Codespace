
function admissionEligibility(arr)
{
    //write your logic here. Return the output
    let elMath = false;
    if(arr[0]>=65){
        elMath = true;
    }
    let elPhy = false;
    if(arr[1]>=55){
        elPhy = true;
    }
    let elchem = false;
        if(arr[2]>= 50){
            elchem = true;
        }
    
        if((elMath==true && elPhy==true) && elchem==true){
            if((arr[0]+arr[1]+arr[2])>=195){
                return "Eligible"
            }
            else if((arr[0]+arr[1])>=140){
                return "Eligible"
            }
            else{
                return "Not eligible"
            }
        }
        else{
            return "Not eligible"
        }
}

console.log(admissionEligibility([70,75,52]));