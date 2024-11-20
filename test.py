import paramiko

def get_router_data_via_ssh(router_ip, username, password, command):
    try:
        # Initialize the SSH client
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(router_ip, username=username, password=password)

        # Execute the command
        stdin, stdout, stderr = ssh.exec_command(command)
        output = stdout.read().decode()

        ssh.close()
        return output
    except Exception as e:
        return f"Error: {e}"


# Variables
router_ip = "192.168.1.1"
username = "root"
password = "your_password"
command = "cat /proc/net/dev"  # Replace with your desired command

# Get data
data = get_router_data_via_ssh(router_ip, username, password, command)
print(data)
