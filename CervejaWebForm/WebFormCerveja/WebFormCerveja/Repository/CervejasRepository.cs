using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebFormCerveja.Models;

namespace WebFormCerveja.Repository
{

    public class CervejasRepository
    {
        private static List<Cervejas> ListaCervejas = new List<Cervejas>();

        public void Salvar(Cervejas model)
        {
            ListaCervejas.Add(model);
        }
        public void Editar(Cervejas model)
        {
            Cervejas modelAnterior = ListaCervejas.Find(c=>c.Id == model.Id);
            if (modelAnterior != null)
            {
                modelAnterior = model;
            }
        }
        public void Excluir(int id)
        {
            Cervejas model = ListaCervejas.Find(c => c.Id == id);
            if (model != null)
            {
                ListaCervejas.Remove(model);
            }
        }
        public List<Cervejas> Listar()
        {
            return ListaCervejas;
        }

    }
}