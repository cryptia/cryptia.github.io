var OSName="Windows";
var ver="http://www.cryptia.com/en/downloads.html";
if (navigator.appVersion.indexOf("Win")!=-1){ OSName="Windows"; ver="http://www.cryptia.com/downloads/win32/cryptia_setup_win32.exe"; }
if (navigator.appVersion.indexOf("Mac")!=-1){ OSName="Mac OS X"; ver="http://www.cryptia.com/downloads/mac/cryptia_setup_mac.dmg"; }
if (navigator.appVersion.indexOf("Linux")!=-1){ OSName="Linux"; ver="http://www.cryptia.com/en/index.html#downloads"; }

var OSName = "Windows"
var ver="http://www.cryptia.com/en/index.html#downloads"
var agent=navigator.userAgent.toLowerCase();
	
if (agent.indexOf("android") != -1) {
	OSName = "Android";
	ver = "https://play.google.com/store/apps/developer?id=Demens";
} else if (agent.indexOf("linux")!=-1){ 
	OSName="Linux";
	if (agent.indexOf("x86_64")!=-1) {
		OSName = "Linux x86_64";
		if (isDEB() == true) {
			OSName = "Linux x86_64 DEB";
			ver="http://www.cryptia.com/downloads/linux_x86_64/cryptiaclient.x86_64.deb"; 
		} else if (isRPM() == true) {
			OSName = "Linux x86_64 RPM";
			ver="http://www.cryptia.com/downloads/linux_x86_64/cryptiaclient.x86_64.rpm";
		} else {
			OSName = "Unknown Linux";
			ver="#downloads";
		}
	} else if (agent.indexOf("x86") != -1) {
		OSName = "Linux x86";
		if (isDEB() == true) {
			OSName = "Linux x86 DEB";
			ver="http://www.cryptia.com/downloads/linux_x86_64/cryptiaclient.x86.deb"; 
		} else if (isRPM() == true) {
			OSName = "Linux x86 RPM";
			ver="http://www.cryptia.com/downloads/linux_x86_64/cryptiaclient.x86.rpm";
		} else {
			OSName = "Unknown Linux";
			ver="#downloads";
		}
	} else {
		OSName = "Unknown architecture";
		ver="#downloadsl"; 
	}
		
} else if (agent.indexOf("win")!=-1){ 
	OSName="Windows"; 
	ver="http://www.cryptia.com/downloads/win32/cryptia_setup_win32.exe"; 
} else if (agent.indexOf("iphone")!=-1) {
	OSName="iOS"; 
	ver="https://itunes.apple.com/us/artist/cryptia-holding-ltd/id738466189"; 
}else if (agent.indexOf("mac")!=-1){ 
	OSName="Mac OS X"; 
	ver="http://www.cryptia.com/downloads/mac/cryptia_setup_mac.dmg"; 
}
	
function isDEB(){
	if (agent.indexOf("debian") !=-1 || agent.indexOf("ubuntu") !=-1 || agent.indexOf("xebian") !=-1 || agent.indexOf("knoppix") !=-1 || agent.indexOf("linspire") !=-1 || agent.indexOf("libranet") !=-1 || agent.indexOf("nitix") !=-1 || agent.indexOf("xandros") !=-1){
		return true;
	} else return false;
}
    
function isRPM() {
	if (agent.indexOf("alt linux") !=-1 || agent.indexOf("ark linux") !=-1 || agent.indexOf("centos") !=-1 || agent.indexOf("fedora") !=-1 || agent.indexOf("mandriva") !=-1 || agent.indexOf("novell") !=-1 || agent.indexOf("red hat") !=-1 || agent.indexOf("suse") !=-1 || agent.indexOf("turbolinux") !=-1 || agent.indexOf("linuxwizard") !=-1){
		return true;
	} else return false;
}
