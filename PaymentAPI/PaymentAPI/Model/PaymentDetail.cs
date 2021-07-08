using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;

namespace PaymentAPI.Model
{
    public class PaymentDetail
    {
        [Key]
        public int PaymentDetailId { get; set; }
        [Column(TypeName="nvarchar(100)")]
        public string CardOwnerName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string CardNumber { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string ExpirationDate { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string SecurityCode { get; set; }
    }
}
