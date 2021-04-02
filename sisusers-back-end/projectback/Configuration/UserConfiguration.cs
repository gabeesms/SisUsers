using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using projectback.ModelsData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projectback.ModelsConfiguration
{
    public class UserConfiguration
    {
        public UserConfiguration(EntityTypeBuilder<UserDTO> entity)
        {
            if (entity != null)
            {
                entity.ToTable("Usuario").HasKey(t => t.id);

                entity.Property(t => t.nome).HasMaxLength(100).IsRequired();

                entity.Property(t => t.email).HasMaxLength(50);

                entity.Property(t => t.telefone).HasMaxLength(14);

                entity.Property(t => t.cpf).HasMaxLength(13);

                entity.Property(t => t.cep).HasMaxLength(9);

                entity.Property(t => t.logradouro).HasMaxLength(100);

                entity.Property(t => t.numero).HasMaxLength(5);

                entity.Property(t => t.complemento).HasMaxLength(50);

                entity.Property(t => t.bairro).HasMaxLength(20);

                entity.Property(t => t.localidade).HasMaxLength(50);

                entity.Property(t => t.uf).HasMaxLength(2);

                entity.Property(t => t.registroDate);
            }
        }
    }
}
