
## các tham số điều chỉnh AI OLLAMA
num_keep: Số lượng câu hoặc đoạn văn bản được giữ lại để hiển thị cho người dùng.
seed: Giá trị khởi tạo cho quá trình tạo ra dữ liệu ngẫu nhiên.
num_predict: Số lượng từ được dự đoán cho mỗi câu hoặc đoạn văn bản được tạo ra.
top_k: Số lượng token có xác suất cao nhất được xem xét trong quá trình dự đoán.
top_p: Ngưỡng trên xác suất tổng cộng của các token để chọn token tiếp theo trong quá trình dự đoán.
tfs_z: Hệ số điều chỉnh cho việc tính toán tần suất của các token trong một câu.
typical_p: Giá trị xác suất mặc định được sử dụng khi không có thông tin nào khác được sử dụng để dự đoán.
repeat_last_n: Số lần lặp lại tối đa của token cuối cùng được phép trong một câu.
temperature: Tham số điều chỉnh độ đa dạng của văn bản được tạo ra.
repeat_penalty: Hệ số phạt được áp dụng cho sự lặp lại của các token trong một câu.
presence_penalty: Hệ số phạt được áp dụng cho sự xuất hiện của các token không mong muốn trong một câu.
frequency_penalty: Hệ số phạt được áp dụng cho sự xuất hiện quá nhiều của các token trong một câu.
mirostat: Có sử dụng mirostat hay không, là một phương pháp đo lường sự tương đồng giữa các câu.
mirostat_tau: Tham số điều chỉnh cho mirostat.
mirostat_eta: Tham số điều chỉnh cho mirostat.
penalize_newline: Có áp dụng phạt cho việc sử dụng ký tự xuống dòng hay không.
stop: Danh sách các token mà nếu xuất hiện trong một câu thì quá trình tạo ra văn bản sẽ dừng lại.
numa: Sử dụng NUMA (Non-Uniform Memory Access) hay không.
num_ctx: Số lượng ngữ cảnh được sử dụng trong quá trình dự đoán.
num_batch: Số lượng mẫu được xử lý cùng một lúc trong quá trình dự đoán.
num_gqa: Số lượng bộ dữ liệu tiền huấn luyện được sử dụng trong quá trình dự đoán.
num_gpu: Số lượng GPU được sử dụng trong quá trình dự đoán.
main_gpu: GPU chính được sử dụng trong quá trình dự đoán.
low_vram: Sử dụng chế độ VRAM thấp hay không.
f16_kv: Sử dụng kiểu dữ liệu float16 cho các key và value trong quá trình dự đoán.
vocab_only: Chỉ sử dụng từ vựng trong quá trình dự đoán.
use_mmap: Sử dụng mmap (memory-mapped file) hay không.
use_mlock: Sử dụng mlock (memory locking) hay không.
rope_frequency_base: Tham số cho việc tính toán tần suất của các token trong một câu.
rope_frequency_scale: Tham số cho việc tính toán tần suất của các token trong một câu.
num_thread: Số lượng luồng được sử dụng trong quá trình dự đoán.

