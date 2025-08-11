const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

const clearCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
};

const buildCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};

const formatCPFs = (cpfs) => {
  return cpfs.map(clearCPF).map(buildCPF);
};

const replaceCPFs = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const formattedCpfs = formatCPFs(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = formattedCpfs[index];
  });
};

replaceCPFs(cpfsList);
