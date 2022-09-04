const Alert = () => {
    const content = `    <div class="position-fixed bottom-1 end-1 z-index-2">
    <div class="alert-danger fade hide p-2 mt-2 bg-white" role="alert" aria-live="assertive" id="dangerToast" aria-atomic="true">
      <div class="toast-header border-0">
        <i class="material-icons text-danger me-2">
    campaign
  </i>
        <span class="me-auto text-gradient text-danger font-weight-bold">Consumo Ativo irregular </span>
        <small class="text-body">11 minutos atrás</small>
        <i class="fas fa-times text-md ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close"></i>
      </div>
      <hr class="horizontal dark m-0">
      <div class="toast-body">
        Quarto 102 - Hóspede Ausente - Sensor Ativo.
      </div>
    </div>
    </div>  `
    document.write(content)
  }