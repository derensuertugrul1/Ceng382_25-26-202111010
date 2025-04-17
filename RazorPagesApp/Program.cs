var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

var app = builder.Build();

// Middleware pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

// Eğer `UseStaticFiles()` eklenmediyse, mutlaka ekle:
app.UseStaticFiles();

app.UseRouting();

app.UseSession(); // Routing'den sonra da kullanılabilir, ama genelde burada sorun olmaz
app.UseAuthorization();

app.MapRazorPages();

app.Run();
