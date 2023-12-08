public class Teste {

    public String X;
    
    public void SetX(){
        TesteFilho a = new TesteFilho();
        
        if (a.Y == 'Japa') {
            X = 'Jambo';
        } else {
            X = 'Mambo';
        }
    }
    
    public class TesteFilho {
        public String Y;
        
        public TesteFilho() {
            Y = 'Japa';
        }
        
    }
    
}