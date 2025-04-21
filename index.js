
async function navigateToProfile(){
  const handle = document.getElementById('handleInput').value;
  window.location.href = `profile.html?handle=${handle}`;
}