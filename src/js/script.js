document.getElementById('downloadBtn').addEventListener('click', function() {
    
    const link = document.createElement('a');
    
    
    link.href = 'https://drive.google.com/file/d/1SLi1Nb7J4tzRmnAqADq5LfYNawewRhCj/view?usp=sharing'; 
    
    
    link.download = 'Curriculo_Guilherme.pdf';

    
    link.click();
  });

  