(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
    }
  })();


(()=>{
  const refs= {
    openMobileBtn:document.querySelector("[data-mobile-open]"),
    closeMobileBtn:document.querySelector("[data-mobile-close]"),
    modalMobile:document.querySelector("[data-modal-mobile]"),
  };
  
  refs.openMobileBtn.addEventListener("click" ,toggleModal);
  refs.closeMobileBtn.addEventListener("click", toggleModal);

  function toggleModal(){
    refs.modalMobile.classList.toggle("is-mobile-open")
  }

})();
  
  

