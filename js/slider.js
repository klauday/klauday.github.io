const chk = document.getElementById('chk');
const editimagezxc = document.getElementById("editimagezxc");
const edittextonzxc = document.getElementById("edittextonzxc");

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark'); 
            
    if (document.body.classList.contains('dark')) {
    	editimagezxc.src = "../image/cloudzxcbyklaud.png"
    	edittextonzxc.innerText  = "Klauday ZXC 1000-7"    	
    }
    else {
    	editimagezxc.src = "../image/cloudblue.png"
    	edittextonzxc.innerText  = "Klauday"    	
    }    
});


