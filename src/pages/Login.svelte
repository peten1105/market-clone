<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user$ } from "../store";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const loginWithGoogle = async () => {
  try {
  
  const result = await signInWithPopup(auth, provider)
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
  user$.set(user);
    window.localStorage.setItem("token", token);
  } catch(error) {
    console.error(error);
  }
};


</script>

<div>
  {#if $user$}
  <div>{$user$.displayName} 로그인됨</div>
  {/if}
  <div>로그인하기</div>
  <button class="login-btn" on:click={loginWithGoogle}>
    <img class="google-img" 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" 
      alt=""/>
    <div>Google로 시작하기</div>
    <div/>
  </button>
</div>

<style>
.login-btn {
  width:200px;
  height: 50px;
  border: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
}
.google-img {
  width:20px;
}
</style>