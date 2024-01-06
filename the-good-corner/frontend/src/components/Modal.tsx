import React from 'react'
import styles from "../styles/Modal.module.css"

const Modal = () => {
   function close() {
      console.log("close");
   }


   return (
      <div className={styles.container}>
         <h1 id={styles.title}>Changement de status</h1>
         <form className={styles.form} /* onSubmit={e => props.addPerson(e)} */>
            <div className='insideForm'>
               <p>Email<br /><input placeholder="Entrer l'email" name="role" /* required="required" */ /></p>
               <p>Rôle actuel<br /></p>
               <p>Rôle attribué
                  <br /><input type="text" name="role" placeholder="Entrer le rôle attribué"  /* required="required" */ /></p>
               <div id="buttons">
                  <button type="submit">OK</button>
                  <button type="button" onClick={close}>Cancel</button>
               </div>
            </div>
         </form>
      </div>
   )
}

export default Modal;