﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PaymentAPI.Model;

namespace PaymentAPI.Migrations
{
    [DbContext(typeof(PaymentDetailContext))]
    [Migration("20210707053516_IntialMIgration")]
    partial class IntialMIgration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PaymentAPI.Model.PaymentDetail", b =>
                {
                    b.Property<int>("PaymentDetailId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CardNumber")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("CardOwnerName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ExpirationDate")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("SecurityCode")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("PaymentDetailId");

                    b.ToTable("PaymentDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
