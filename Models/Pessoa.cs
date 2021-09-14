namespace CRUDAPI.Models

{
    public class Pessoa 
    {
        public int PessoaId { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public int Idade { get; set; }
        public string Profissao { get; set; }
        public string Date { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Legislation { get; set; }
        public string Type { get; set; }
        public string StartTime { get; set; }        
        public string EndTime { get; set; }
        public string VariableDates { get; set; }
    }
    
}