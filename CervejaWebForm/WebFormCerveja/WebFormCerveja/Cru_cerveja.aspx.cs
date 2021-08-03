using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebFormCerveja.Models;
using WebFormCerveja.Repository;

namespace WebFormCerveja
{
    public partial class cru_cerveja : System.Web.UI.Page
    {
        private CervejasRepository repository;
        protected void Page_Load(object sender, EventArgs e)
        {
            this.repository = new CervejasRepository();
        }

        protected void btnSalvar_Click(object sender, EventArgs e)
        {
            Cervejas model = new Cervejas();
            model.Id = Convert.ToInt32(this.txtID.Text);
            model.Nome = this.txtNome.Text;
            model.Tipo = this.txtTipo.Text;
            repository.Salvar(model);
            LimparCampos();
        }
        private void LimparCampos()
        {
            this.txtID.Text = string.Empty;
            this.txtNome.Text = string.Empty;
            this.txtTipo.Text = string.Empty;
        }
    }
}